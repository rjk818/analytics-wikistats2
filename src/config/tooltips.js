/**
 * This file is built by webpack as a separate bundle, and imported in an async way
 * to minimize impact on first page load
 */

export default {
    help: {
        'maximize': 'Hide the side panel and make the graph bigger',
        'minimize': 'Restore the side panel',

        'download': 'Download the data you are viewing',
        'permalink': 'Permanent link',
        'copy': 'Copy to clipboard',
        'change-chart': 'Change the chart',

        'annotations': 'Annotations',

        'split-total': 'See the overall total',
        'split': 'Split the total into parts to see more detail.  Filter to the parts you\'re interested in using the checkboxes',
    },
    wikistats1Metric: 'This is a Wikistats 1 metric. Click here to go to the legacy version.',
    filterAndSplit: 'Split up the total into different categories, and hide one or more categories',
    breakdown: {
        'desktop': 'The site intended for desktop devices (may be viewed on mobile devices)',
        'mobile-app': 'Any of the Wikimedia native mobile apps',
        'mobile-web': 'The site intended for mobile devices (may be viewed on desktop devices)',

        'mobile-site': 'The site intended for mobile devices (may be viewed on desktop devices)',
        'desktop-site': 'The site intended for desktop devices (may be viewed on mobile devices)',

        'anonymous': 'A user that has not logged in',
        'group-bot': 'A bot that is registered and part of the bot user group',
        'name-bot': 'A user that has a name which contains "bot" (note that this could include names like BottlenoseDolphin)',
        'user': 'A registered, logged in user',

        'spider': 'A computer program that crawls through sites to index them, generally web search engines',
        'bot': 'A computer program automatically requesting a page',

        'content': 'Also referred to as "Main Namespace", includes articles in namespace zero and and a few others',
        'non-content': 'Talk pages, user pages, etc. are called Non Content',

        '1..4-edits': 'Made between 1 and 4 edits in each month or day shown',
        '5..24-edits': 'Made between 5 and 24 edits in each month or day shown',
        '25..99-edits': 'Made between 25 and 99 edits in each month or day shown',
        '100..-edits': 'Made 100 or more edits in each month or day shown',
    },
}
