import React from 'react';

function Blog() {
    const blogData = [
        {
            img: 'https://minion-vinovatheme.myshopify.com/cdn/shop/articles/blog-1_386x386_crop_top.png?v=1614756761',
            title: '5 Sweet Outfit Ideas You’ll Wear Well Beyond Valentine’s Day',
            excerpt: 'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember.',
            author: 'VINOVA THEME',
            date: '03 MAR 2021'
        },
        {
            img: 'https://minion-vinovatheme.myshopify.com/cdn/shop/articles/blog-2_386x302_crop_top.png?v=1616666242',
            title: 'How To Be “Good With Money” According To 4 Female Financial Experts',
            excerpt: 'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember.',
            author: 'VINOVA THEME',
            date: '03 MAR 2021'
        },
        {
            img: 'https://minion-vinovatheme.myshopify.com/cdn/shop/articles/blog-3_386x386_crop_top.png?v=1614756711',
            title: 'This Scandi Influencer’s Shoe Collaboration Is The Gift That Keeps On Giving',
            excerpt: 'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember.',
            author: 'VINOVA THEME',
            date: '03 MAR 2021'
        },
        {
            img: 'https://minion-vinovatheme.myshopify.com/cdn/shop/articles/blog-4_386x302_crop_top.png?v=1614756682',
            title: '5 Sweet Outfit Ideas You’ll Wear Well Beyond Valentine’s Day',
            excerpt: 'Valentine’s Day 2021 has no choice but to unfold rather differently than usual, so we already know it will be one to remember.',
            author: 'VINOVA THEME',
            date: '03 MAR 2021'
        }
    ];

    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-5">From Our Blog</h2>
                <div className="row">
                    {blogData.map((blog, index) => (
                        <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                            <div className="card h-100 border-0 shadow-sm">
                                <img src={blog.img} className="card-img-top" alt="blog" />
                                <div className="card-body">
                                    <h6 className="card-title fw-bold">{blog.title}</h6>
                                    <p className="card-text text-muted" style={{ fontSize: '14px' }}>{blog.excerpt}</p>
                                </div>
                                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                                    <small style={{ fontSize: "10px", fontWeight: "700", color: "#000" }} className="bi bi-person text-muted">BY {blog.author}</small>
                                    <small
                                        className="text-muted d-flex align-items-center gap-1"
                                        style={{
                                            fontSize: '10px',
                                            background: '#f1f1f1',
                                            padding: '2px 8px',
                                            fontWeight: "700"
                                        }}
                                    >
                                        <i className="bi bi-calendar3" style={{ fontSize: "10px", fontWeight: "700" }}></i>
                                        {blog.date}
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center flex-wrap text-muted" style={{ fontSize: '13px', fontWeight: '500', padding: '0px 50px', margin: "70px 0 30px 0" }}>

                <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-truck" style={{ fontSize: '30px', marginRight: "10px" }}></i>
                    <div>
                        <strong>Free Shipping</strong>
                        <span> on all US order or order above<br />$99</span>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-telephone" style={{ fontSize: '16px' }}></i>
                    <div>
                        <strong>Support 24/7</strong>
                        <span> : Contact us 24 hours a day, 7 days a week</span>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-arrow-left-right" style={{ fontSize: '16px' }}></i>
                    <div>
                        <strong>30 Days Return</strong>
                        <span> : Simply return it within 30 days for an exchange.</span>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Blog;
