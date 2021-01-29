<template>
  <div class="container">
    <el-row>
      <el-button type="primary" @click="addDialogFormVisible = true"
        >添加</el-button
      >
      <el-button type="success">导入</el-button>
      <el-button type="danger">导出</el-button>
      <el-button type="info">模板下载</el-button>
    </el-row>

    <el-table :data="tableData" border style="width: 100%; margin-top: 10px">
      <el-table-column prop="国际化key" label="国际化key" width="120">
      </el-table-column>
      <el-table-column prop="en" label="en" width="180"> </el-table-column>
      <el-table-column prop="fr" label="fr" width="180"> </el-table-column>
      <el-table-column prop="es" label="es" width="180"> </el-table-column>
      <el-table-column prop="de" label="de" width="180"> </el-table-column>
      <el-table-column prop="it" label="it" width="180"> </el-table-column>
      <el-table-column prop="pt" label="pt" width="180"> </el-table-column>
      <el-table-column prop="ja" label="ja" width="180"> </el-table-column>
      <el-table-column prop="ru" label="ru" width="180"> </el-table-column>
      <el-table-column prop="nl" label="nl" width="180"> </el-table-column>
      <el-table-column prop="ar" label="ar" width="180"> </el-table-column>
      <el-table-column prop="no" label="no" width="180"> </el-table-column>
      <el-table-column prop="da" label="da" width="180"> </el-table-column>
      <el-table-column prop="sv" label="sv" width="180"> </el-table-column>
      <el-table-column prop="ko" label="ko" width="180"> </el-table-column>
      <el-table-column prop="fi" label="fi" width="180"> </el-table-column>
      <el-table-column prop="he" label="he" width="180"> </el-table-column>
      <el-table-column prop="pl" label="pl" width="180"> </el-table-column>
      <el-table-column prop="cz" label="cz" width="180"> </el-table-column>
      <el-table-column prop="tr" label="tr" width="180"> </el-table-column>
      <el-table-column prop="ro" label="ro" width="180"> </el-table-column>
      <el-table-column prop="hu" label="hu" width="180"> </el-table-column>
      <el-table-column prop="gr" label="gr" width="180"> </el-table-column>
      <el-table-column prop="th" label="th" width="180"> </el-table-column>
      <el-table-column prop="ms" label="ms" width="180"> </el-table-column>
      <el-table-column prop="id" label="id" width="180"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">复制</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-for="(v, k) in tableData" v-bind:key="k">{{ v.text }}</div>
    <el-dialog title="添加国际化文案" :visible.sync="addDialogFormVisible">
      <el-form v-for="(v, k) in formList" v-bind:key="k" :model="v">
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
