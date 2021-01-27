import {
  LangFileName
} from '../../configs/languageConfig.js'
export const obj = {
  data() {
    return {
      langTitles: LangFileName
    }
  },
  methods: {
    async onSubmit() {
      let params =  {
        type: 'ezbuy',
        internationnal: {
        "internationnalKey": "hello_world",
        "countrys": [{
          "country": "en",
          "text": "你好 世界"
        }]
       }
      }
      let res = await this.$axios.post('/i18n/addInternationnal', {
        params
      })
      console.log(res)
      if(res.status == 200) {
        this.$message.success('加入成功！');
      } else {
        this.$message.error(res.msg);
      }
    }
  }
}
