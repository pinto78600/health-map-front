import React from 'react'
import './Calendar.css'
import { NavLink } from "react-router-dom"

const Calendar = () => {
  return (
    <div>
      <h1 className='h1-vaccination-schedule'>Vaccination schedule</h1>
      <div className="all-boxs">
        <div className="vaccine-box">
          <h2 className="age">After 18 years</h2>
          <h3 className="disease">Diphtheria *, Tetanus, Poliomyelitis: recalls are now recommended at 25 years, 45 years, 65 years, then every 10 years from 65 years</h3>
          <p className="dosage">* Diphtheria : with a vaccine containing a reduced dose of diphtheria toxoid </p>
          <h3 className="disease">Whooping cough</h3>
          <p className="dosage">1 (single) dose *: on the occasion of the 25-year recall if the person has not been vaccinated for 5 years; a catch-up can be done until the age of 39.
        <span className="little">* With a quadrivalent vaccine containing reduced doses of diphtheria toxoid and pertussis antigen</span></p>
          <h3 className="disease">Invasive Meningococcal C Serogroup Infections</h3>
          <p className="dosage">1 dose: catch-up up to 24 years of age, for people not previously vaccinated.</p>
          <h3 className="disease">Measles Mumps Rubella</h3>
          <p className="dosage">People born since 1980 should have received a total of two doses of trivalent vaccine, with a minimum of one month between doses, regardless of the history of the three diseases.</p>
          <h3 className="disease">Influenza</h3>
          <p className="dosage">From the age of 65, an annual injection of influenza vaccine is systematically recommended for the entire population.</p>
          <h3 className="disease">Shingles</h3>
          <p className="dosage">1 (single) dose: vaccination is recommended in adults aged 65 to 74 years, including those who have already had one or more episodes of shingles.</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">Up to 15 years</h2>
          <h3 className="disease">Hepatitis B</h3>
          <p className="dosage"> In catch-up, for adolescents aged 11 to 15 years, not previously vaccinated:<br />
          - either according to the classic three-dose scheme, <br />
          - either according to a two-dose schedule spaced at least 6 months apart (with the ENGERIX® B20 μg vaccine).</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">Between 11 and 14 years</h2>
          <h3 className="disease">Human papillomavirus infections</h3>
          <p className="dosage">2 doses 6 months apart, for girls and boys. <br />
          A catch-up is planned between 15 and 19 years old for people of both sexes not yet vaccinated.</p>
          <h3 className="disease">Diphtheria *, Tetanus, Pertussis *, Poliomyelitis</h3>
          <p className="dosage">3rd recall <br />
        * with a vaccine containing reduced doses of diphtheria toxoid and pertussis antigen.</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">6 years</h2>
          <h3 className="disease">Diphtheria, Tetanus, Pertussis, Poliomyelitis</h3>
          <p className="dosage">2nd reminder</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">Between 16 and 18 months</h2>
          <h3 className="disease">Measles, Mumps, Rubella</h3>
          <p className="dosage">2nd dose</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">12 months</h2>
          <h3 className="disease">Measles, Mumps, Rubella</h3>
          <p className="dosage">First dose</p>
          <h3 className="disease">Invasive meningococcal infections of serogroup C</h3>
          <p className="dosage">2nd dose</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">11 months</h2>
          <h3 className="disease">Diphtheria, Tetanus, Pertussis, Poliomyelitis, invasive Haemophilus influenzae b infections</h3>
          <p className="dosage">First recall</p>
          <h3 className="disease">Hepatitis B</h3>
          <p className="dosage">First reminder</p>
          <h3 className="disease">Invasive Pneumococcal Infections</h3>
          <p className="dosage">Reminder</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">5 months</h2>
          <h3 className="disease">Invasive meningococcal infections of serogroup C</h3>
          <p className="dosage">First dose <span>Compulsory vaccination since January 1, 2018</span></p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">4 months</h2>
          <h3 className="disease">Diphtheria, Tetanus, Pertussis, Poliomyelitis, invasive Haemophilus influenzae b infections</h3>
          <p className="dosage">2nd dose</p>
          <h3 className="disease">Hepatitis B</h3>
          <p className="dosage">2nd dose</p>
          <h3 className="disease">Invasive Pneumococcal Infections</h3>
          <p className="dosage">2nd dose</p>
        </div>
        <div className="vaccine-box">
          <h2 className="age">2 months</h2>
          <h3 className="disease">Diphtheria, Tetanus, Pertussis, Poliomyelitis, invasive Haemophilus influenzae b infections</h3>
          <p className="dosage">First dose</p>
          <h3 className="disease">Hepatitis B</h3>
          <p className="dosage">First dose <span className="little">Compulsory vaccination since January 1, 2018</span></p>
          <h3 className="disease">Invasive Pneumococcal Infections</h3>
          <p className="dosage">First dose <span className="little">Compulsory vaccination since January 1, 2018</span></p>
        </div>
        <h4 className='h4-footer'>Vaccination calendar 2020-General recommendations</h4>
      </div>
      <NavLink to="/Map" ><i class="fas fa-arrow-circle-left"></i></NavLink>
    </div>
  )
}

export default Calendar