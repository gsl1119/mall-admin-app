<template>
  <div class="menu-list">
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <template v-for="route in $store.state.menuRoutes">
        <a-menu-item :key="route.name" v-if="!route.meta.hidden">
          <a-icon type="pie-chart" />
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
        <a-sub-menu v-for="child in route.children" :key="child.name">
          <span slot="title"><a-icon type="mail" /><span>{{ child.meta.title }}</span></span>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
