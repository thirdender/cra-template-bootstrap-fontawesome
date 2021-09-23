import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './App.module.scss';

function App() {
  // Card component: https://getbootstrap.com/docs/5.0/components/card/
  // Form layout: https://getbootstrap.com/docs/5.0/forms/layout/
  const [isWaiting, setIsWaiting] = useState(false);
  return (
    <div className={styles.App}>
      <h1 className="visually-hidden">Test Monkeys</h1>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <form className="card">
              <img className="card-img-top" src="https://placekitten.com/g/1600/400" alt="Kitten" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ex ut ligula bibendum posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus finibus nulla in metus congue, in ultricies velit posuere. Proin faucibus augue et hendrerit lobortis. Quisque luctus non justo ut sodales. Phasellus varius, metus a euismod blandit, diam dolor iaculis odio, quis facilisis tellus arcu id arcu. Phasellus ac dapibus velit. Mauris auctor nisi non velit fermentum commodo. Aliquam malesuada faucibus dolor luctus viverra. Nulla facilisi. Suspendisse magna arcu, ullamcorper at semper sit amet, feugiat nec dolor. Praesent a felis et justo condimentum tempus. In eget ultrices nulla. Nunc pharetra est ac semper interdum. Aenean lobortis tempor massa non ultricies. Sed malesuada, enim vulputate consequat malesuada, nisi enim egestas orci, ut dignissim metus purus in augue.
                </p>
                <div className="row mt-4 mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                  </div>
                </div>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                      <label className="form-check-label" for="gridRadios1">
                        First radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                      <label className="form-check-label" for="gridRadios2">
                        Second radio
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled />
                      <label className="form-check-label" for="gridRadios3">
                        Third disabled radio
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="gridCheck1" />
                      <label className="form-check-label" for="gridCheck1">
                        Example checkbox
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <a href="/" className="btn btn-success ms-2">
                    Create account
                    <FontAwesomeIcon icon={['fas', 'user']} className="ms-2" />
                  </a>
                  <button
                    type="submit"
                    className="btn btn-primary ms-2"
                    onClick={(e) => {
                      setIsWaiting(!isWaiting);
                      e.preventDefault();
                    }}
                  >
                    Sign in
                    {isWaiting
                      ? <FontAwesomeIcon icon={['fas', 'circle-notch']} spin className="ms-2" />
                      : <FontAwesomeIcon icon={['fas', 'chevron-right']} className="ms-2" />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
