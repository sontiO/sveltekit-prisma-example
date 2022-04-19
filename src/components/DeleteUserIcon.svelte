<script>
	export let user;
	import { XCircle } from 'lucide-svelte';
	console.log('debug', user);
</script>

<form action="/users?_method=delete" method="post">
	<input type="hidden" name="id" value={user.id} />
	<button aria-label="Remove tweet" title="Remove" type="submit">
		<div class="circle mt-1.5">
			<XCircle size={14} />
		</div>
	</button>
</form>
