<template>
	<div id="app">
		<h1>My Todo App! 2</h1>
	</div>
</template>

<style lang="less">
@import '../less/utils/utils.less';

*, *::before, *::after {
	box-sizing: border-box;
}

h1 {
    color: @blue;
    text-align: center;

    .mobile({
        color: @green;
    });
}
</style>
