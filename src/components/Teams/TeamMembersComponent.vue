<script setup>
import TeamMember from "@/components/TeamMember.vue"
import { useTeamStore } from '../../stores/TeamStore';
let team = useTeamStore();
</script>


<template>

    <table class="table-fixed border-spacing-2 border-separate">
      <thead>
      <th class="text-left px-6 py-2">Name</th>
      <th class="text-left px-6 py-2">Email</th>
      <th class="text-left px-6 py-2">status</th>
      </thead>
      <tbody>
        <TeamMember v-for="Member in team.members" :name="Member.name" :email="Member.email" :status="Member.status"/>
        
  
        

      
      </tbody>
    </table>
    <p class="text-right text-gray-600 italic " v-show="team.members?.length==team.spots">There are no remaining team spots. Upgrade to add more.</p>
</template> 