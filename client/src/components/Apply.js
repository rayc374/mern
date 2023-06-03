import { useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import './Apply.css';
const Apply = ({ user }) => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  return (
    <div>
      {/* <form style={{ textAlign: 'center' }}>
        <div>
          <label>公司或單位名稱：</label>
          <input type="text"></input>
        </div>
        <div style={{ margin: '0.5rem' }}>
          <label>活動性質：</label>
          <select>
            <option>請選擇</option>
            <option>會議</option>
            <option>課程講座</option>
            <option>展覽</option>
            <option>音樂/表演</option>
            <option>親子活動</option>
          </select>
        </div>
        <label>選擇申請的場地：</label>
        <select>
          <option value={0}>請選擇</option>
          <option>3F城東藝廊</option>
          <option>3F市民講堂</option>
          <option>2F親子共讀區</option>
          <option>1F樂學教室</option>
          <option>1F梯廳</option>
          <option>戶外廣場</option>
        </select>
        <div style={{ margin: '0.5rem' }}>
          <label>選擇日期：</label>
          <input type="date" />
        </div>
        <div style={{ margin: '1rem' }}>
          <label>選擇時段：</label>
          <input type="checkbox" id={'上午'} name={'上午'} value={'am'} />
          <label>上午</label>
          <input type="checkbox" id={'上午'} name={'上午'} value={'pm'} />
          <label>下午</label>
        </div>
        <div style={{ margin: '0.5rem' }}>
          <label>活動人數：</label>
          <select>
            <option>請選擇</option>
            <option>10人以下</option>
            <option>11~20人</option>
            <option>21~40人</option>
            <option>41~60人</option>
            <option>61~130人</option>
          </select>
        </div>
        <div>
          <label>備註：</label>
          <input type="text" placeholder="活動名稱或其他事項" />
        </div>
        <div style={{ margin: '0.5rem' }}>
          <input
            className="btn btn-primary btn-lg"
            type="submit"
            value={'送出申請'}
          ></input>
        </div>
      </form> */}
      <div class="row">
        <div class="col-xs-12 col-lg-offset-3 col-lg-6">
          <div class="m-b-md text-center">
            <h1 id="title">Survey Form</h1>
            <p id="description" class="description">
              Let us know how we can improve freeCodeCamp
            </p>
          </div>
          <form method="GET" action="" id="survey-form" name="survey-form">
            <fieldset>
              <label for="name" id="name-label">
                Name *
                <input
                  class=""
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name (required)"
                  required
                />
              </label>
            </fieldset>
            <fieldset>
              <label for="email" id="email-label">
                Email *
                <input
                  class=""
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email (required)"
                  required
                />
              </label>
            </fieldset>
            <fieldset>
              <label for="number" id="number-label">
                Age *
                <input
                  class=""
                  type="number"
                  id="number"
                  name="number"
                  min="8"
                  max="112"
                  placeholder="Enter you age (required)"
                  required
                />
              </label>
            </fieldset>
            <fieldset>
              <label for="dropdown">
                Which option best describes your current role? *
                <select id="dropdown" name="dropdown" class="m-t-xs">
                  <option value="student" selected>
                    Student
                  </option>
                  <option value="ftLob">Full Time Job</option>
                  <option value="ftLearner">Full Time Learner</option>
                  <option value="notSaying">Prefer not to say</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </fieldset>
            <fieldset>
              <div class="labels">
                How likely is that you would recommend freeCodeCamp to a friend?
                *
              </div>
              <label class="m-b-xs">
                <input
                  type="radio"
                  name="survey-form-gender"
                  value="definitely"
                  checked
                />{' '}
                Definitely
              </label>
              <label class="m-b-xs">
                <input type="radio" name="survey-form-gender" value="maybe" />{' '}
                Maybe
              </label>
              <label class="m-b-xs">
                <input type="radio" name="survey-form-gender" value="notSure" />{' '}
                Not sure
              </label>
            </fieldset>
            <fieldset>
              <label for="survey-form-like">
                What do you like most in FCC:
                <select
                  id="survey-form-like"
                  name="survey-form-like"
                  class="m-t-xs"
                >
                  <option value="challenges" selected>
                    Challenges
                  </option>
                  <option value="projects">Projects</option>
                  <option value="community">Community</option>
                  <option value="openSource">Open Source</option>
                </select>
              </label>
            </fieldset>
            <fieldset>
              <div class="labels">
                Things that should be improved in the future (Check all that
                apply):
              </div>
              <label for="survey-form-improve1" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve1"
                  value="feProjects"
                />
                Front-end Projects
              </label>
              <label for="survey-form-improve2" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve2"
                  value="beProjects"
                />
                Back-end Projects
              </label>
              <label for="survey-form-improve3" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve3"
                  value="dataVisualization"
                />
                Data Visualization
              </label>
              <label for="survey-form-improve4" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve4"
                  value="challenges"
                />
                Challenges
              </label>
              <label for="survey-form-improve5" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve5"
                  value="openSources"
                />
                Open Source Community
              </label>
              <label for="survey-form-improve6" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve6"
                  value="gitter"
                />
                Gitter help rooms
              </label>
              <label for="survey-form-improve7" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve7"
                  value="videos"
                />
                Videos
              </label>
              <label for="survey-form-improve8" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve8"
                  value="meetup"
                />
                City Meetups
              </label>
              <label for="survey-form-improve9" class="m-b-xs">
                <input type="checkbox" id="survey-form-improve9" value="wiki" />
                Wiki
              </label>
              <label for="survey-form-improve10" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve10"
                  value="forum"
                />
                Forum
              </label>
              <label for="survey-form-improve11" class="m-b-xs">
                <input
                  type="checkbox"
                  id="survey-form-improve11"
                  value="additional"
                />
                Additional Courses
              </label>
            </fieldset>
            <fieldset>
              <label for="survey-form-suggestions">
                Any Comments or Suggestions?
                <textarea
                  id="survey-form-suggestions"
                  maxlength="194"
                ></textarea>
              </label>
            </fieldset>
            <button id="submit" type="submit" class="btn">
              Submit the form
            </button>
          </form>
          <div class="copyright m-t-sm">
            <div>
              By Adèle Royer with <i class="glyphicon glyphicon-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
