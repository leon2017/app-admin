import {
  LangFileName
} from '../../configs/languageConfig.js'
export const obj = {
  data() {
    return {
      langTitles: LangFileName,
      addDialogFormVisible: false,
      formList: [],
      formLabelWidth: '100px'
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
        type: 'ezbuy',
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
    }
  }
}
