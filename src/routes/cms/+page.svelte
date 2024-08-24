<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import {checkSession, isLoggedIn} from '../../stores/authStore'

    onMount(()=>{
        checkSession()
        
    }) 


    let userName = '';
    let password = '';
  
    // Error message if login fails
    let errorMessage = '';
  
    // Function to handle form submission
    const handleLogin = async () => {
        var url=`https://thecollegecuber.devconsort.com:3099/api/auth?userName=${userName}&password=${password}`
      const response = await fetch( url);
  
      const data = await response.json();
      console.log(url)

      console.log('res data',data)
      
      if (data.success) {
        $isLoggedIn = true;
        localStorage.setItem('isLoggedIn',$isLoggedIn.toString());
      } else {
        errorMessage = 'Invalid credentials. Please try again.';
      }
    };

    $:{
        console.log("is logged in", $isLoggedIn)
        if($isLoggedIn) goto("/cms/edit/portfolio")
    }
  </script>
  
  {#if $isLoggedIn}
    <p>Welcome, {userName}!</p>
  {:else}
    <div class="login-container">
      <h2>Login</h2>
      <form on:submit|preventDefault={handleLogin}>
        <div>
          <label for="userName">Username:</label>
          <input type="text" id="userName" bind:value={userName} required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" bind:value={password} required />
        </div>
        {#if errorMessage}
          <p class="error">{errorMessage}</p>
        {/if}
        <button type="submit">Login</button>
      </form>
    </div>
  {/if}
  
  <style>
        :global(body) {
        font-family: Inter;
    }
    .login-container {
      max-width: 300px;
      margin: 0 auto;
      padding: 1em;
      background-color: #f9f9f9;
      border-radius: 5px;
    }
  
    .login-container h2 {
      text-align: center;
    }
  
    .login-container div {
      margin-bottom: 1em;
    }
  
    .login-container label {
      display: block;
      margin-bottom: 0.5em;
    }
  
    .login-container input {
      width: 100%;
      padding: 0.5em;
      box-sizing: border-box;
    }
  
    .error {
      color: red;
      text-align: center;
      margin-bottom: 1em;
    }

    button{
      width: 100%;
      padding: 6px 0;
      margin-top: 8px;
    }
  </style>
  