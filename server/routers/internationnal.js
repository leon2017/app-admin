const Router = require('koa-router')
const Internationnal = require('../dbs/models/internationnalModels.js')

const router = new Router({
  prefix: '/i18n'
})

router.get('/lists', async (ctx) => {
  const lists = await Internationnal.find()
  ctx.body = {
    status: 200,
    data: lists
  }
})

router.post('/addInternationnal', async (ctx) => {
  let params = ctx.request.body.params;
  console.log("params", params);
  let typeName = params.type;
  let internation = params.internationnal;
  // console.log("internation", internation);
  let internationnalModel = await Internationnal.findOne({
    'name': typeName
  })
  // console.log("internationnalModel", internationnalModel);
  if (!internationnalModel) {
    let param = {};
    let iList = []
    param.name = typeName;
    iList.push(internation);
    param.values = iList;
    internationnalModel = await Internationnal.create(param)
    // console.log("internationnalModel2", internationnalModel);
  } else {
    let languages = internationnalModel.values;
    for (let i = 0; i < languages.length; i++) {
      if (internation.internationnalKey == languages[i].internationnalKey) {
        languages.splice(i, 1)
      }
    }
    internationnalModel.values.push(internation)
  }
  let res = await internationnalModel.save()
  if (res) {
    ctx.body = {
      status: 200,
      msg: "成功"
    }
  } else {
    ctx.body = {
      status: 0,
      msg: "失败"
    }
  }
})

module.exports = router;