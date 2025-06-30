<script setup>
// import TeamMember from "@/components/TeamMember.vue"
// import team from "@/team.json";
import TeamHeader from "../components/Teams/TeamHeader.vue";
import TeamMembersComponent from "../components/Teams/TeamMembersComponent.vue";
import TeamFooter from "../components/Teams/TeamFooter.vue";
import { useTeamStore } from "../stores/TeamStore";
let team = useTeamStore();

team.fill();
</script>

<template>
   <TeamHeader :team="team"/>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembersComponent :team="team"/>
    
  </div>
 <TeamFooter :team="team"/>
</template>
