<template>
  <div>
    <el-form
      :inline="true"
      :model="tableFilter"
      class="demo-form-inline tableFilter-form"
    >
      <el-form-item>
        <el-input v-model="tableFilter.key" placeholder="id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="tableFilter.sex" placeholder="性别">
          <el-option label="全部" value="全部"></el-option>
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitSex">性别筛选</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="singleTable" :data="list" highlight-current-row>
      <el-table-column property="id" label="id" width="50"></el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="120"
      ></el-table-column>
      <el-table-column
        property="sex"
        label="性别"
        width="120"
      ></el-table-column>
      <el-table-column property="address" label="地址"> </el-table-column>
    </el-table>

    <el-table ref="singleTable" :data="filterIdList(tableFilter.key)" highlight-current-row>
      <el-table-column property="id" label="id" width="50"></el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="120"
      ></el-table-column>
      <el-table-column
        property="sex"
        label="性别"
        width="120"
      ></el-table-column>
      <el-table-column property="address" label="地址"> </el-table-column>
    </el-table>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      tableFilter: {
        key: null,
        sex: "",
      }
    };
  },
  computed: {
    ...mapState({
      list: "list",
    }),
    ...mapGetters({
      filterIdList: "filterIdList",
    }),
  },
  methods: {
    onSubmitSex() {
      this.$store.commit("initList");
      let changeList = this.$store.getters.filterSex(this.tableFilter.sex);
      this.$store.commit("changeList", {
        changeList: changeList,
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  margin-left: -25%;
  margin-top: -25%;
}
.tableFilter-form {
  width: 80%;
  height: auto;
  margin: 40px auto 0;
}
.el-table {
  width: 80%;
  height: auto;
  margin: 40px auto 0;
}
</style>
