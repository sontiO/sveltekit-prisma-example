<script>
	export let user;
	import { XCircle } from 'lucide-svelte';
	console.log('debug', user);
</script>

<form action="/users?_method=delete" method="post">
	<input type="hidden" name="id" value={user.id} />
	<button aria-label="Remove tweet" title="Remove" type="submit">
		<div class="circle">
			<XCircle size={16} />
		</div>
	</button>
</form>
