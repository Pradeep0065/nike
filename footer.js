document.write(` 
<footer>

    <div class="footer_main row">
        <div class="tag">
            <h1>Contact</h1>
            <a href="#"><i class="fa-solid fa-house"></i>123/patna/India</a>
            <a href="#"><i class="fa-solid fa-phone"></i>+91 6205646243</a>
            <a href="#"><i class="fa-sharp fa-solid fa-envelope"></i>contact@gmail.com</a>
        </div>

        <div class="tag">
            <h1>Get Help</h1>
            <a href="#" class="center">FAQ</a>
            <a href="#" class="center">Shipping</a>
            <a href="#" class="center">Returns</a>
            <a href="#" class="center">Payment Options</a>
        </div>

        <div class="tag none">
            <h1>Our Stores</h1>
            <a href="#" class="center">India</a>
            <a href="#" class="center">China</a>
            <a href="#" class="center">USA</a>
            <a href="#" class="center">Britain</a>
        </div>

        <div class="tag none">
            <h1>Follow Us</h1>
            <div class="social_link">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>

        <div class="tag">
            <h1>Newsletter</h1>
            <div class="search_bar">
                <input type="text" placeholder="You email id">
                <button type="submit">Subscribe</button>
            </div>
        </div>
    </div>

</footer>
<script>


                                $(document).ready( function(){
                            
                                    $('.nav-item').click( function(){
                                        var data = $(this).attr('data');
                                        $('.tabs').hide();
                                        $(`#${data}-tab`).show();
                                    });
                            
                               });
                            
                            
                            </script>


</body>

</html> `);