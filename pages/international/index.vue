<template>
  <div class="container">
    <el-row>
      <el-button type="primary" @click="addDialogFormVisible = true">添加</el-button>
      <el-button type="success">导入</el-button>
      <el-button type="info">模板下载</el-button>
    </el-row>

    <el-dialog title="添加国际化文案" :visible.sync="addDialogFormVisible">
      <el-form v-for="(v,k) in formList" v-bind:key="k" :model="v">
        <!-- <el-form-item label="国际化key" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item :label="v.country" :label-width="formLabelWidth">
          <el-input v-model="v.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { obj } from "./index";
export default obj;
</script>

<style>
@import url("./index.css");
</style>
