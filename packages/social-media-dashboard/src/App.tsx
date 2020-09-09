import { GrFacebook, GrTwitter, GrInstagram, GrYoutube } from 'react-icons/gr';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

import React, { useState } from 'react';

export function App() {
  const [checked, toggle] = useState(false);

  return (
    <div className="cr_Dashboard">
      <header className="cr_DashboardHeader">
        <div className="cr_DashboardHeaderTitle">
          <h1 className="cr_DashboardHeaderTitle-heading cr_u-heading">
            Social Media Dashboard
          </h1>
          <strong className="cr_DashboardHeaderTitle-subheading cr_u-subheading">
            Total followers: 23,004
          </strong>
        </div>
        <div className="cr_DashboardToggle">
          <span className="cr_DashboardToggle-label cr_u-subheading">
            Dark Mode
          </span>
          <label className={`cr_Toggle ${checked ? 'is-checked' : ''}`}>
            <input
              className="cr_Toggle-native"
              type="checkbox"
              onChange={(e) => toggle(e.target.checked)}
            />
            <span className="cr_Toggle-fake" />
          </label>
        </div>
      </header>
      <main>
        <section className="cr_DashboardFollowers">
          <h2 className="cr_u-srOnly">Followers</h2>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">facebook</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">
                <GrFacebook color="#178FF5" size="1.25rem" />
              </span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                @nathanf
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">1987</span>
                <span className="cr_DashboardCard-subscribers-label">
                  Followers
                </span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">12 Today</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">twitter</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">
                <GrTwitter color="#1DA1F2" size="1.25rem" />
              </span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                @nathanf
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">1044</span>
                <span className="cr_DashboardCard-subscribers-label">
                  Followers
                </span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">99 Today</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">instagram</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">
                <GrInstagram color="#EE877E" size="1.25rem" />
              </span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                @realnathanf
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">11k</span>
                <span className="cr_DashboardCard-subscribers-label">
                  Followers
                </span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">1099 Today</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">youtube</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">
                <GrYoutube color="#C4032B" size="1.25rem" />
              </span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                Nathan F.
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">8239</span>
                <span className="cr_DashboardCard-subscribers-label">
                  Subscribers
                </span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--down">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretDown />
                </span>
                <span className="cr_DashboardCard-stats-value">144 Today</span>
              </div>
            </div>
          </article>
        </section>
        <section className="cr_DashboardSubscriptions">
          <h2 className="cr_DashboardSubscriptions-title cr_u-heading">
            Overview - Today
          </h2>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Page Views
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrFacebook color="#178FF5" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">87</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">3%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Likes
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrFacebook color="#178FF5" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">52</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--down">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretDown />
                </span>
                <span className="cr_DashboardCard-stats-value">2%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Likes
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrInstagram color="#EE877E" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">5462</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">2257%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Profile Views
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrInstagram color="#EE877E" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">52K</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">1375%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Retweets
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrTwitter color="#1DA1F2" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">117</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">303%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Likes
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrTwitter color="#1DA1F2" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">507</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretUp />
                </span>
                <span className="cr_DashboardCard-stats-value">553%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Likes
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrYoutube color="#C4032B" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">107</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--down">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretDown />
                </span>
                <span className="cr_DashboardCard-stats-value">19%</span>
              </div>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--subscriptions">
            <div className="cr_DashboardCard-title">
              <h3 className="cr_DashboardCard-title-label cr_u-subheading">
                Total Views
              </h3>
              <span className="cr_DashboardCard-title-icon">
                <GrYoutube color="#C4032B" size="1.25rem" />
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <div className="cr_DashboardCard-subscribers">
                <span className="cr_DashboardCard-subscribers-value">1407</span>
              </div>
              <div className="cr_DashboardCard-stats cr_DashboardCard-stats--down">
                <span className="cr_DashboardCard-stats-icon">
                  <FaCaretDown />
                </span>
                <span className="cr_DashboardCard-stats-value">12%</span>
              </div>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
