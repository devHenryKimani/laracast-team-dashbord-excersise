
import { defineStore } from "pinia";

 export let useTeamStore = defineStore( 'team',{
   state(){
    return{
        name:'',
        spots: 0,
        members:[]
    }
   },
   actions:{
    fill(){
        import('../team.json').then(response => {
            
        // this.name = response.name;
        // this.spots = response.spots;
        // this.members = response.members;
        this.$patch({
            name: response.name,
            spots: response.spots,
            members:response.members
        });
        });
    }
   }
});