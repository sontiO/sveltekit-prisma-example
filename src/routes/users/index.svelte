<script>
	import UserList from '../../components/UserList.svelte';
	import UserForm from '../../components/UserForm.svelte';
	// populated with data from the endpoint (/users/index.js)
	export let users;
	console.log(users);
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-zinc-200">
	<div class="">
		<div class="relative sm:py-16">
			<div aria-hidden="true" class="hidden sm:block">
				<div class="absolute inset-y-0 left-0 w-1/2  rounded-r-3xl" />
			</div>
			<div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
				<div
					class="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20"
				>
					<div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
						<svg
							class="absolute inset-0 h-full w-full"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 1463 360"
						>
							<path
								class="text-indigo-500 text-opacity-40"
								fill="currentColor"
								d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
							/>
							<path
								class="text-indigo-700 text-opacity-40"
								fill="currentColor"
								d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
							/>
						</svg>
					</div>
					<div class="relative">
						<div class="sm:text-center">
							<h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
								Trying SvelteKit and Prisma <br />
								<span class="tracking-wide mx-2">It works great! </span> 🥳 🎉
							</h2>
							<p class="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">
								Please enter your name below to create a new database entry.
							</p>
						</div>
						<UserForm />
						<UserList {users} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
