import {
  LangFileName
} from '../../configs/languageConfig.js'
import XLSX from 'xlsx'
export const obj = {
  data() {
    return {
      typeName: this.$route.query.typeName,
      langTitles: LangFileName,
      addDialogFormVisible: false,
      dialogFormVisible: false,
      formList: [],
      formLabelWidth: '100px',
      tableData: []
    }
  },
  created() {
    console.log("created");
  },

  watch: {
    '$route'(newVal, oldVal) {
      let tempTypeName = newVal.query.typeName
      console.log(tempTypeName)
      console.log("watch");
      if(tempTypeName!=this.typeName){
        this.typeName= tempTypeName;
        this.queryLanguags();
      }
    }
  },
  mounted(){
    let tempList = [];
    tempList.push({
      "key": "internationnalKey",
      "country": "国际化key",
      "text":""
    })
    let langs = this.langTitles.map((l)=> {
     let from= {
       "country": l,
       "text":""
     }
     return from
    });
    tempList = tempList.concat(langs);
    this.formList = tempList;
    this.queryLanguags();
  },
  methods: {
    async onSubmit() {
      console.log(this.formList);
      let tempKey = this.formList.find( n => n.key !='').text
      // console.log("tempKey===>",tempKey);
      if(!tempKey){
        this.$message.error('key 不能为空');
        return;
      }
      let tempCountrys = this.formList.filter((f)=> {
        return f.key != "internationnalKey"
      })
      // console.log("tempCountrys===>",JSON.stringify(tempCountrys));
      let params =  {
        type: this.typeName,
        internationnal: {
          internationnalKey: tempKey,
          countrys: tempCountrys
       }
      }
      console.log("params===>",JSON.stringify(params));
      let res = await this.$axios.post('/i18n/addInternationnal', {
        params
      })
      console.log(res)
      if(res.status == 200) {
        this.$message.success('加入成功！');
        this.addDialogFormVisible = false
        this.formList = []
      } else {
        this.$message.error(res.msg);
      }
    },
    async queryLanguags(){
      let res = await this.$axios.get(`/i18n/queryInternationnals?typeName=${this.typeName}`);
      if(res.status == 200) {
        let tempList = res.data.values;
        // console.log("tempList==>",tempList);
        let typeList = [];
        for (let index = 0; index < tempList.length; index++) {
          let languageList = []
          const element = tempList[index];
          // console.log("element==>",element);
          languageList.push({
            "labelText": "国际化key",
            "text": element.internationnalKey
          })
          let countrys = element.countrys
          for (let j = 0; j < countrys.length; j++) {
            const tempCountry = countrys[j];
            // console.log("country==>",tempCountry);
            languageList.push({
              "labelText": tempCountry.country,
              "text": tempCountry.text
            })
          }
          typeList.push(languageList)
        }
        console.log("typeList==>",typeList);
        let typeObjList =[]
        for (let index = 0; index < typeList.length; index++) {
          let typeObj = {}
          const element = typeList[index];
          for (let j = 0; j < element.length; j++) {
            const o = element[j];
            typeObj[o.labelText] = o.text
          }
          typeObjList.push(typeObj)
        }
        console.log("typeObjList==>",typeObjList);
        this.tableData = typeObjList
      } else {
        this.tableData = []
        this.$message.error(res.msg);
      }
    },


    importExcel(file) {
      // let file = file.files[0] // 使用传统的input方法需要加上这一步
      const types = file.name.split('.')[1]
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
      if (!fileType) {
        alert('格式错误！请重新选择')
        return
      }
      this.file2Xce(file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          console.log("tabJson==>",tabJson);
          this.xlsxJson = tabJson
          // xlsxJson就是解析出来的json数据,数据格式如下
          // [
          //   {
          //     sheetName: sheet1
          //     sheet: sheetData
          //   }
          // ]
        }
      })
    },
    file2Xce(file) {
      return new Promise(function(resolve, reject) {
        const reader = new FileReader()
        reader.onload = function(e) {
          const data = e.target.result
          this.wb = XLSX.read(data, {
            type: 'binary'
          })
          const result = []
          this.wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(this.wb.Sheets[sheetName])
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
        // reader.readAsBinaryString(file) // 传统input方法
      })
    }
  }
}
