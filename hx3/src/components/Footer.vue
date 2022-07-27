<template>
    <div class="footer">
        <div class="info">
            <div class="logo">
                <img src="../assets/logo.png" />
            </div>
            <ul class="navlist">
                <li>Home</li>
                <li>Products</li>
                <li>Package</li>
                <li>Service</li>
                <li>Quality</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="copyright">Copyright © Advanced Metals Co.,Ltd All Rights Reserved. </div>
    </div>
</template>

<style>
.footer {
    background-color: #1e88e5;
    color: #ffffffc9;
    margin: 0 auto;
    width: 100%;
    height: 12rem;
    text-align: center;
}

.footer>.info {
    height: 8rem;
    border-bottom: 1px solid #ffffff59;
    margin: 0 3rem 1.2rem;
    display: flex;
}

.info .logo {
    flex: 2;
}

.info>.logo>img {
    width: 15rem;
    margin: -1.5rem 0 0 0;
    opacity: 0.9;
    filter: brightness(5);
}

.info .navlist {
    flex: 1;
    display: flex;
    list-style: none;
}

.navlist>li {
    width: 6rem;
    cursor: pointer;
    margin: 3.5rem 0 1.5rem 1.5rem;
    height: 2rem;
    font-size: 1.1rem;
}

.copyright {
    opacity: 0.7;
}
</style>