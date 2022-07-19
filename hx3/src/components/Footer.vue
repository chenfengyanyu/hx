<template>
    <div class="footer">
        <div class="info">
            <div class="logo">
                <img src="../assets/logo-w.svg" />
            </div>
            <ul class="navlist">

                <li>Products</li>
                <li>Service</li>
                <li>Package</li>
                <li>Contact Us</li>
                <li>About HX</li>
            </ul>
        </div>
        <div class="copyright">Copyright © HX. All Rights Reserved. </div>
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

.info>.logo>img{
    margin: 3.5rem 0 0 0;
    transform: scale(1.5);
    opacity: 0.8;
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