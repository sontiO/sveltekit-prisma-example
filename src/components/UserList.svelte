<script>
	export let users;
	import { XCircle } from 'lucide-svelte';
	import DeleteUserIcon from './DeleteUserIcon.svelte';
</script>

<ul class="flex flex-col my-4 w-full text-white mx-2">
	{#each users as user}
		<li class="flex flex-row gap-x-1  items-center">
			{user.name}
			<DeleteUserIcon {user} />
		</li>
	{:else}
		<li>No Users yet</li>
	{/each}
</ul>
