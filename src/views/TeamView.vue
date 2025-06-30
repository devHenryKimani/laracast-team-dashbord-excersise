<script setup>
// import TeamMember from "@/components/TeamMember.vue"
// import team from "@/team.json";
import TeamHeader from "../components/Teams/TeamHeader.vue";
import TeamMembersComponent from "../components/Teams/TeamMembersComponent.vue";
import TeamFooter from "../components/Teams/TeamFooter.vue";
import { useTeamStore } from "../stores/TeamStore";
import modal from "../components/modal.vue";
import { ref } from "vue";

let team = useTeamStore();

team.fill();
let showmodal = ref(false);
</script>

<template>
   <TeamHeader @add="showmodal = true"/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembersComponent :team="team"/>
    
  </div>
 <TeamFooter :team="team"/>
 <template >
  <p>Need to add a new member to your team?</p>
  <form>
    <div>
      <input type="email" placeholder="Email address...">
      <button>Add</button>
    </div>
  </form>

 </template>
 <modal :show="showmodal " @close="showmodal = false"/>
</template>
