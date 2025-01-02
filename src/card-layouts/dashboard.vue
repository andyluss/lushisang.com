<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

// const chartComps = { BinUtilizationRate, OrdersByTime, PalletsByTime };
const chartList = ref([
	{ name: "BinUtilizationRate" },
	{ name: "OrdersByTime" },
	{ name: "PalletsByTime" },
]);

// // Layout:

// onMounted(() => {
// 	const savedLayout = getLayoutInDashboard();
// 	if (savedLayout) {
// 		const all = _.unionBy(chartList.value, savedLayout, "name");
// 		chartList.value = _.intersectionBy(chartList.value, all, "name");
// 		saveLayoutInDashboard(chartList.value);
// 	}
// });

// function getLayoutInDashboard() {
// 	const item = getLocalItem(local.dashboard);
// 	if (!item) return [];
// 	return JSON.parse(item);
// }

// function saveLayoutInDashboard(layout: { name: string }[]) {
// 	setLocalItem(local.dashboard, JSON.stringify(layout));
// }

// Drag:

const drag = ref(false);
function onDragEnd() {
	drag.value = false;
	// saveLayoutInDashboard(chartList.value);
}
</script>

<template>
  <div class="page-root dashboard-container d-block">
    <div class="title-bar-two-sides title-bar-stick">
      <h1 class="page-title">
        Dashboard
      </h1>
    </div>
    <draggable
      v-model="chartList"
      item-key="name"
      animation="200"
      ghost-class="ghost"
      class="list-group"
      @start="drag = true"
      @end="onDragEnd"
    >
      <template #item="{ element }">
        <div class="list-group-item">
          <!-- <component :is="chartComps[element.name]"/> -->
        </div>
      </template>
    </draggable>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
}

.dashboard-container .ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.dashboard-container .list-group {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.dashboard-container .list-group-item {
  margin: 0 40px 40px 0;
  flex: none;
}

/* no effect? */
.dashboard-container .list-group-item.table-css {
  flex: none;
  width: 50%;
  padding: 0 20px 20px 0;
  margin: 0;
}
</style>
