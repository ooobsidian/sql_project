<template>
  <div class="layout">
    <Layout>
      <Sider
        :style="{position:'fixed',left:'0', height:'100vh'}"
        breakpoint="md"
        collapsible
        :collapsed-width="78"
        v-model="isCollapsed"
      >
        <Menu active-name="1-1" theme="dark" width="auto">
          <div class="icon">
            <Row type="flex" align="middle" class="code-row-bg">
              <Col span="8">
                <div style="height:100px"></div>
              </Col>
              <Col span="8">
                <Avatar :style="{background: color}" size="large"  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3253669902,1784406936&fm=27&gp=0.jpg"></Avatar>
              </Col>
              <Col span="8"></Col>
            </Row>
          </div>
          <MenuItem name="1-3" to="/courseselect">
            <Icon type="ios-navigate"></Icon>
            <span>课程管理</span>
          </MenuItem>
          <MenuItem name="1-2" to="/grade">
            <Icon type="ios-search"></Icon>
            <span>成绩管理</span>
          </MenuItem>
          <MenuItem name="1-1" to="/myinfo">
            <Icon type="ios-people"></Icon>
            <span>个人信息</span>
          </MenuItem>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout :style="{marginLeft: '200px'}">
        <Breadcrumb :style="{marginLeft:'40px',marginTop:'40px'}">
          <BreadcrumbItem>SQL</BreadcrumbItem>
          <BreadcrumbItem>选课管理系统</BreadcrumbItem>
          <BreadcrumbItem>个人信息</BreadcrumbItem>
        </Breadcrumb>

        <Content :style="{minHeight: '500px'}">
          <Row align="middle" justify="end" class="code-row-bg">
            <div style="color:#52586E;width:90%;margin:50px;">
              <Card :bordered="true">
                <p slot="title">
                  <Icon type="ios-people"></Icon>
                  个人信息
                </p>
                <p>
                  学号： {{GLOBAL.sno}}
                </p>
                <p>
                  姓名： {{GLOBAL.sname}}
                </p>
                <p>
                  性别： {{GLOBAL.sex}}
                </p>
                <p>
                  年龄： {{GLOBAL.age}}
                </p>
                <p>
                  学院： {{GLOBAL.sdept}}
                </p>
              </Card>
            </div>
          </Row>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "myinfo"
  }
</script>

<style scoped>
  .ivu-layout-sider {
    background: #2d8cf0 !important;
  }

  .ivu-menu-dark {
    background: #2d8cf0 !important;
  }

  .ivu-menu-item-selected {
    background: #256dc1 !important;
    color: aliceblue !important;
  }
  .ivu-menu-item:hover {
    background: #2f8ff7 !important;
  }
</style>
