import React from 'react';
import instagram from '../image/instagram.svg';
import facebook from '../image/facebook.svg';
const HomeComponent = () => {
  return (
    <main>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">DemoApp</h1>
            <p className="col-md-8 fs-4">
              本系統使用 React.js 作為前端框架，Node.js、MongoDB
              作為後端服務器。這種項目稱為 MERN
              項目，它是創建現代網站的最流行的方式之一。
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              看看它怎麼運作。
            </button>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>宜蘭市立圖書館</h2>
              <p>
                Why do we use it? It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).
              </p>
              <button className="btn btn-outline-light" type="button">
                =
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>div 日曆區</h2>
              <p>loerm</p>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          <div>
            &copy; 2023 Ray
            <img src={facebook} />
            <img src={instagram} />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default HomeComponent;
