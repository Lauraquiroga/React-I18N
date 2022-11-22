import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";

import messages_en from "./locales/en.json";
import messages_es from "./locales/es.json";

const messages = {
    'en': messages_en,
    'es': messages_es
  };

const language = navigator.language.split(/[-_]/)[0];
//const language = "en"

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages={messages[language]}>
            <JobsList language={language}/>
    </IntlProvider>, document.getElementById("root")
);