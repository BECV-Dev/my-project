<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default{
    name: 'MyComponent',
    data(){
        return {
            message: '¡Hello world!'
        }
    }
}
</script>