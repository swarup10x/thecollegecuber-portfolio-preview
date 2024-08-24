<script>
    import { page } from '$app/stores';
    import { isLoggedIn } from '../../stores/authStore';
    import { goto } from '$app/navigation';

    var urlSplits=$page.url.pathname.split("/")

    let pageName=urlSplits[urlSplits.length-1]

    console.log('pathname',$page.url.pathname)
    console.log('pageName',pageName)

    function logout(){
        $isLoggedIn = false;
        localStorage.setItem('isLoggedIn',$isLoggedIn.toString());
        goto("/cms")
    }



</script>

<div class="sidebar-wrapper">
    <div class="header">
        CMS
    </div>

    <div class="listWrapper">
        <a class="item" href="/cms/edit/portfolio" class:selected={'portfolio'===pageName}>Portfolio</a>
        <a class="item" href="/cms/edit/cube-art" class:selected={'cube-art'===pageName}>Cube Art</a>
        <a class="item" href="/cms/edit/lego-art" class:selected={'lego-art'===pageName}>Lego Art</a>
        <a class="item" href="/cms/edit/contact-us" class:selected={'contact-us'===pageName}>Contact</a>
        <a class="item" href="/cms/edit/others" class:selected={'others'===pageName}>Others</a>
        <a class="item" href="/cms/edit/images" class:selected={'images'===pageName}>Images</a>
    </div>

    <div on:click={logout} class="logout">
        logout
    </div>
    

</div>

<style>

    .logout{
        cursor: pointer;
        padding: 4px;
        margin:4px;
        margin-top: 12px;
        text-align: center;
        background-color: #c1c1c1;
        border-radius: 3px;
    }
    .listWrapper{
        display: flex;
        flex-direction: column;
    }

    .header{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #c1c1c1;
        padding-bottom: 12px;
    }

    .item{
        all:unset;
        cursor: pointer;
        padding: 0;
        margin: 0;

        color: #dedede;
        font-size: 16px;
        padding: 4px;
        margin:4px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 2px;
    }
    .selected{
        border: 1px solid rgba(255, 255, 255);
        color: white;
    }
    
    .sidebar-wrapper{
        top:0;
        width: 100px;
        padding-right: 3px;
        padding-left: 1px;
        height: 100vh;
        position: fixed;
        background-color: #1e1e39;
    }
</style>