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
  console.log("params",params);
  let typeName = params.type;
  let internation = params.internationnal;
  console.log("internation",internation);
  let internationnalModel = await Internationnal.findOne({
    'name': typeName
  })
  internationnalModel.save()
  console.log("internationnalModel",internationnalModel);
  if(!internationnalModel.length){
    let param = {};
    let iList = []
    param.name = typeName;
    iList.push(internation);
    param.values = iList;
    internationnalModel = await Internationnal.create(param)
    console.log("internationnalModel2",internationnalModel);
  }else{
    let tempList = []
    let tempValues = internationnalModel.values;
    for (let index = 0; index < tempValues.length; index++) {
      const element = tempValues[index];
      if (element.internationnalKey == internation.internationnalKey) {
        tempList.push(internation)
      } else {
        tempList.push(element)
      }
    }
    internationnalModel.values = tempList
    console.log("internationnalModel3",internationnalModel);
  }
  let res = await internationnalModel.save()
  if (res) {
    ctx.body = {
      status: 200,
      msg: sucMsg
    }
  } else {
    ctx.body = {
      status: 0,
      msg: errMsg
    }
  }
})

module.exports = router;
