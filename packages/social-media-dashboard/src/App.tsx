import React from 'react';

export function App() {
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
          <span className="cr_Toggle">toggle</span>
        </div>
      </header>
      <main>
        <section className="cr_DashboardFollowers">
          <h2 className="cr_u-srOnly">Followers</h2>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">facebook</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">[f]</span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                @nathanf
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <span className="cr_DashboardCard-metrics-value">1987</span>
              <span className="cr_DashboardCard-metrics-label">Followers</span>
            </div>
            <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
              <span className="cr_DashboardCard-stats-icon">[^]</span>
              <span className="cr_DashboardCard-stats-value">12 Today</span>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">twitter</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">[t]</span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                @nathanf
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <span className="cr_DashboardCard-metrics-value">1044</span>
              <span className="cr_DashboardCard-metrics-label">Followers</span>
            </div>
            <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
              <span className="cr_DashboardCard-stats-icon">[^]</span>
              <span className="cr_DashboardCard-stats-value">99 Today</span>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">instagram</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">[t]</span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                @realnathanf
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <span className="cr_DashboardCard-metrics-value">11k</span>
              <span className="cr_DashboardCard-metrics-label">Followers</span>
            </div>
            <div className="cr_DashboardCard-stats cr_DashboardCard-stats--up">
              <span className="cr_DashboardCard-stats-icon">[^]</span>
              <span className="cr_DashboardCard-stats-value">1099 Today</span>
            </div>
          </article>
          <article className="cr_DashboardCard cr_DashboardCard--followers">
            <h3 className="cr_u-srOnly">youtube</h3>
            <div className="cr_DashboardCard-title">
              <span className="cr_DashboardCard-title-icon">[t]</span>
              <span className="cr_DashboardCard-title-subheading cr_u-subheading">
                Nathan F.
              </span>
            </div>
            <div className="cr_DashboardCard-metrics">
              <span className="cr_DashboardCard-metrics-value">8239</span>
              <span className="cr_DashboardCard-metrics-label">Subscriber</span>
            </div>
            <div className="cr_DashboardCard-stats cr_DashboardCard-stats--down">
              <span className="cr_DashboardCard-stats-icon">[^]</span>
              <span className="cr_DashboardCard-stats-value">144 Today</span>
            </div>
          </article>
        </section>
        {/* <section>
          <h2>Overview - Today</h2>
          <article>
            <div>
              <h3>Page Views Facebook</h3>
              <span>icon facebook</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Likes Facebook</h3>
              <span>icon facebook</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Likes instagram</h3>
              <span>icon instagram</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Profile Views instagram</h3>
              <span>icon instagram</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Retweets twitter</h3>
              <span>icon twitter</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Likes twitter</h3>
              <span>icon twitter</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Likes Youtube</h3>
              <span>icon Youtube</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
          <article>
            <div>
              <h3>Total Views Youtube</h3>
              <span>icon Youtube</span>
            </div>
            <div>
              <span>87</span>
              <div>
                <span>icon chevron</span>
                <span>3%</span>
              </div>
            </div>
          </article>
        </section> */}
      </main>
    </div>
  );
}
