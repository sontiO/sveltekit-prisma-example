<script>
	export let users;
	import { XCircle } from 'lucide-svelte';
	import DeleteUserIcon from './DeleteUserIcon.svelte';
	import { fade, fly } from 'svelte/transition';
</script>

<ul class="flex flex-col my-4 w-full text-white mx-2">
	{#each users as user}
		<li class="inline-flex gap-x-2  " out:fade>
			{user.name}
			<DeleteUserIcon {user} />
		</li>
	{:else}
		<li>No Users yet</li>
	{/each}
</ul>
