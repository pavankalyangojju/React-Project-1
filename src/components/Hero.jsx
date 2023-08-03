const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>Your IoT Deserve the Best</h1>
                <p>Your IoT Deserve the Best <br />
                    Your IoT Deserve the Best <br />
                    Your IoT Deserve the Best <br />
                    Your IoT Deserve the Best <br />
                    Your IoT Deserve the Best <br />
                    Your IoT Deserve the Best <br />
                    Your IoT Deserve the Best
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="cat">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="brand-icons">
                        <img src="/images/Amazon.png" alt="" />
                        <img src="/images/flipkart.png" alt="" />

                    </div>
                </div>



            </div>
            <div className="hero-image">
                <img src="/images/iot.jpg" alt="" />
            </div>

        </main>
    )
}
export default HeroSection;