import React from 'react'

import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Triggered on the /cv route
 */
export default() => (
  <div>
    <DynamicHelmet
      title="CV - Maxence Grosjean"
      description="CV"
      keywords="CV Maxence Grosjean"
    />
    <div className="section">
      <div className="container">
        <h1 className="title">MAXENCE GROSJEAN</h1>
        <div className="content">
          <ul>
            <li><strong>Nationality:</strong> French</li>
            <li><strong>Address:</strong> 12 Rue du 8 Mai 1945, 69510 Soucieu-en-Jarrest</li>
            <li><strong>Email address:</strong> maxence.grosjean@cpe.fr</li>
            <li><strong>Telephone:</strong> +336 1835 4310</li>
          </ul>
          <div style={{ paddingTop: '0.5em' }}>
            <strong>Profile:</strong> Fourth year electronics student with:
            <ul>
              <li>- Excellent communication skills in French and English.</li>
              <li>- Experience of project management in programming.</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div className="section section-cv">
      <div className="container">
        <h1 className="title">EDUCATION</h1>
        <div className="content">
          <ul>
            <li><strong>2015-2016</strong> CPE Lyon, department of electronics, fourth year of higher education</li>
            <li><strong>Main subjects:</strong> Computer programming, electronics, mathematics</li>
            <li><strong>With:</strong> English, japanese</li>
            <li><strong>Options:</strong> Economics, anthropology</li>
            <li><strong>Projects:</strong> Websites, desktop application, game development</li>
            <li>Graduation expected in <strong>2019</strong> at MSc level</li>
            <li>
              <strong>2013-2015</strong> Institution des Chartreux ‘Classes Préparatoires’ 2 years higher education in
              mathematics and science with languages and general studies, in preparation for entry to CPE Lyon
            </li>
            <li><strong>June 2013</strong> Scientific baccalaureate, French secondary school leaving certificate passed with distinction</li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <div className="section section-cv">
      <div className="container">
        <h1 className="title">WORK EXPERIENCE</h1>
        <div className="content">
          <ul>
            <li>
              <strong>July 2015</strong> Balance sheet checker, Amitel, looked at balance sheets from various companies in order
              to check if they were correct
            </li>
            <li>
              <strong>July 2016</strong> IT support, Ville de Lyon, created task automation tools with VBA and made illumination simulations
            </li>
            <li>
              <strong>July - December 2017</strong> Web developer intern, CommuterClub, worked on both company{"'"}s sites in PHP
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <div className="section section-cv">
      <div className="container">
        <h1 className="title">SKILLS</h1>
        <div className="content">
          <ul>
            <li>
              <strong>Languages:</strong>
              <ul>
                <li>
                  <span>French:</span> native speaker
                </li>
                <li>
                  <span>English:</span> fluent
                </li>
                <li>
                  <span>Japanese:</span> begginer
                </li>
              </ul>
            </li>
            <li>
              <strong>Technical:</strong>
              <ul>
                <li>
                  <span>Languages:</span> JavaScript, PHP, Java, Sass, SQL
                </li>
                <li>
                  <span>Frameworks:</span> ExpressJS, ReactJS, Slim, AngularJS, JEE
                </li>
                <li>
                  <span>Other tools:</span> Webpack, GulpJS, Eslint
                </li>
              </ul>
            </li>
            <li>
              <strong>Softwares:</strong> Microsoft Office packages, GIMP, Audacity
            </li>
            <li>
              <strong>Others:</strong> Multitasking, independence
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
    <div className="section section-cv">
      <div className="container">
        <h1 className="title">EXTRA-CURRICULAR ACTIVITIES</h1>
        <div className="content">
          Running, movies, videogames, music
        </div>
      </div>
    </div>
  </div>
)
