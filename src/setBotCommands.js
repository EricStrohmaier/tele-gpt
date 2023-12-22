// import {  userConfig } from './main';
import { TRANSLATIONS } from './translation.js';
import { PARAMETERS } from './parameters.js';
export function setBotCommands(bot) {
    // const userConfigs = getUserConfigs();
    // const language = userConfigs[chatId || '']?.language|| PARAMETERS.LANGUAGE;    
    const language = PARAMETERS.LANGUAGE;
    bot.setMyCommands([
        {
            command: 'start',
            description: TRANSLATIONS[language]['command-descriptions'].start,
        },
        {
            command: 'jobs',
            description: TRANSLATIONS[language]['command-descriptions'].jobs,
        },
        {
            command: 'jobalert',
            description: TRANSLATIONS[language]['command-descriptions'].jobalert,
        },
        {
            command: 'value4value',
            description: TRANSLATIONS[language]['command-descriptions'].donate,
        },
        // {
        //     command: 'privacy',
        //     description:
        //   TRANSLATIONS[language][
        //       'command-descriptions'
        //   ].privacy,
        // },
        {
            command: 'freeguide',
            description: TRANSLATIONS[language]['command-descriptions'].freeguide,
        },
    ]);
}
