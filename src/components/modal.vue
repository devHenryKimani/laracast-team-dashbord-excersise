<script setup>
defineProps({
    show:Boolean
});

</script>

<template >
    <Transition
    enter-from-class="transition duration-1000 opacity-0"
    enter-to-class="transition duration-1000 opacity-100"
     leave-from-class="transition duration-1000 opacity-100"
     leave-to-class="transition duration-1000 opacity-0"
    >
    <div v-if="show" class="modal-mask">
    <div class="modal-container">
    

    <div>
        <slot>default body</slot>
    </div>

    <footer class="modal-footer">
        <slot name="footer">
        <button @click="$emit('close')">close</button>
        </slot>
    </footer>
    </div>
    </div>
    </Transition>
</template>

<style>
.modal-mask{
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .6);
    display: grid;
    place-items: centre;
}
.modal-container{
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}
.modal-footer{
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: .8rem;
}
.modal-footer button{
    background: #ddd;
    border-radius: 20px;
    padding: .25rem .75rem;
}
</style>