<script>
	export let users;
	import { XCircle } from 'lucide-svelte';
	import DeleteUserIcon from './DeleteUserIcon.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<ul class="flex flex-col w-full mx-2 my-4 text-white">
	{#each users as user}
		<li class="inline-flex gap-x-2 ">
			{user.name}
			<DeleteUserIcon {user} />
		</li>
	{:else}
		<li>No Users yet</li>
	{/each}
</ul>
