// Application
export const statusOptions = [
    { key: 'applied', value: 'Applied' },
    { key: 'offered', value: 'Offered' },
    { key: 'deleted', value: 'Deleted' }
];

export const appliedByOptions = [
    { key: 'tech_is', value: 'TECH I.S.' },
    { key: 'student', value: 'Student' }
];

export const jobPortalOptions = [
    { key: 'linkedin', value: 'LinkedIn' },
    { key: 'indeed', value: 'Indeed' },
    { key: 'monster', value: 'Monster' },
    { key: 'glassdoor', value: 'Glassdoor' },
    { key: 'work_day', value: 'Work Day' },
    { key: 'smart_work', value: 'Smart Work' },
    { key: 'dice', value: 'Dice' },
    { key: 'other', value: 'Other' }
];

export const studentTimezoneOptions = [
    { key: 'usa_eastern', value: 'USA/Eastern' },
    { key: 'usa_central', value: 'USA/Central' },
    { key: 'usa_mountain', value: 'USA/Mountain' },
    { key: 'usa_pacific', value: 'USA/Pacific' },
    { key: 'usa_arizona', value: 'USA/Arizona' },
    { key: 'usa_alaska', value: 'USA/Alaska' },
    { key: 'usa_hawaii', value: 'USA/Hawaii' }
];

// Interview
export const interviewStatusOptions = [
    { key: 'scheduling', value: 'Scheduling' },
    { key: 'scheduled', value: 'Scheduled' },
    { key: 'working', value: 'Working' },
    { key: 'done', value: 'Done and Waiting for the Result' },
    { key: 'sent_reminder', value: 'Sent Reminder' },
    { key: 'canceled', value: 'Canceled Interview by Company' },
    { key: 'missed', value: 'Missed Interview by Student' },
    { key: 'got_other_offer', value: 'No need to proceed because of Other Offer' },
    { key: 'pause_applications', value: 'No need to proceed because of Pause Applications' },
    { key: 'rejected', value: 'Rejected' },
    { key: 'passed', value: 'Passed' },
    { key: 'offered', value: 'Offered' },
    { key: 'deleted', value: 'Deleted' }
];

export const interviewTypeOptions = [
    { key: 'phone_call', value: 'Phone call' },
    { key: 'assessment_real_time', value: 'Assessment Real Time' },
    { key: 'assessment_submit', value: 'Assessment Submit' },
    { key: 'video_call', value: 'Video Call' },
    { key: 'onsite_interview', value: 'Onsite Interview' },
    { key: 'not_mentioned', value: 'Not mentioned' }
];

export const interviewRoundOptions = [
    { key: 0, value: 'Not Updated' },
    { key: 1, value: 'Round 1' },
    { key: 2, value: 'Round 2' },
    { key: 3, value: 'Round 3' },
    { key: 4, value: 'Round 4' }
];

// Students
export const studentsStatusOptions = [
    {
        key: 'graduated',
        value: 'Graduated'
    },
    {
        key: 'preparing',
        value: 'Preparing'
    },
    {
        key: 'perpared_by_dev_team',
        value: 'Prepared by Developer Team'
    },
    {
        key: 'started_application',
        value: 'Started Application'
    },
    {
        key: 'pause_application',
        value: 'Pause Application'
    },
    {
        key: 'got_offer',
        value: 'Got an Offer'
    },
    {
        key: 'joined',
        value: 'Joined'
    },
    {
        key: 'activated_payment',
        value: 'Activated Payment'
    },
    {
        key: 'failed',
        value: 'Failed to Get a Job'
    },
    {
        key: 'deleted',
        value: 'Deleted'
    },
    {
        key: 'reapply',
        value: 'Reapply'
    },
    {
        key: 'missing',
        value: 'Missing'
    }
];

export const studentsCourseOptions = [
    {
        key: 'web',
        value: 'Web Development'
    },
    {
        key: 'data',
        value: 'Data Science'
    }
];

export const studentsGenderOptions = [
    {
        key: 'male',
        value: 'Male'
    },
    {
        key: 'female',
        value: 'Female'
    }
];

export const studentsResumeQuestionnaireStatusOptions = [
    {
        key: 'not_yet',
        value: 'Not Yet'
    },
    {
        key: 'done',
        value: 'Done'
    }
];

export const studentsApplicationQuestionnaireStatusOptions = [
    {
        key: 'not_yet',
        value: 'Not Yet'
    },
    {
        key: 'done',
        value: 'Done'
    }
];

export const studentsResumeStatusOptions = [
    {
        key: 'not_started',
        value: 'Not Started Creating'
    },
    {
        key: 'on_progress',
        value: 'On Progress'
    },
    {
        key: 'done',
        value: 'Done by Developer Team'
    },
    {
        key: 'correction_required',
        value: 'Corrections Required'
    },
    {
        key: 'correction_done',
        value: 'Corrections Done'
    },
    {
        key: 'reviewed',
        value: 'Reviewed by Job Support'
    }
];

export const studentsGithubStatusOptions = [
    {
        key: 'not_started',
        value: 'Not Started Creating'
    },
    {
        key: 'on_progress',
        value: 'On Progress'
    },
    {
        key: 'done',
        value: 'Done by Developer Team'
    },
    {
        key: 'correction_required',
        value: 'Corrections Required'
    },
    {
        key: 'correction_done',
        value: 'Corrections Done'
    },
    {
        key: 'reviewed',
        value: 'Reviewed by Job Support'
    }
];

export const adminRoleOptions = [
    {
        key: 'director',
        value: 'Director'
    },
    {
        key: 'marketing',
        value: 'Marketing'
    },
    {
        key: 'job_support',
        value: 'Job Support'
    },
    {
        key: 'development',
        value: 'Development'
    }
];

export const adminPermissionOptions = [
    { key: 'normal', value: 'Normal' },
    { key: 'manager', value: 'Manager' }
];

export const adminStatusOptions = [
    {
        key: 'active',
        value: 'Active'
    },
    {
        key: 'deleted',
        value: 'Deleted'
    }
];

export const studentsWakeUpStatusOptions = [
    {
        key: 'not_yet',
        value: 'Not Yet'
    },
    {
        key: 'done',
        value: 'Done'
    }
];

export const partnerStatusOptions = [
    {
        key: 'meratas',
        value: 'Meratas'
    },
    {
        key: 'leif',
        value: 'Leif'
    }
];

export const colorCode = {
    grey: '#566573',
    orange: '#ff4f00',
    brown: '#C28416',
    red: '#FF0E03',
    green: '#008000',
    blue: '#2616C2',
    default: '#000000'
};

export const statusColorOptions = [
    { key: 'applied', value: colorCode.orange },
    { key: 'offered', value: colorCode.green },
    { key: 'deleted', value: colorCode.default }
];

export const interviewStatusColorOptions = [
    { key: 'scheduling', value: colorCode.default },
    { key: 'scheduled', value: colorCode.orange },
    { key: 'working', value: colorCode.brown },
    { key: 'done', value: colorCode.green },
    { key: 'sent_reminder', value: colorCode.green },
    { key: 'canceled', value: colorCode.red },
    { key: 'missed', value: colorCode.blue },
    { key: 'rejected', value: colorCode.red },
    { key: 'passed', value: colorCode.green },
    { key: 'offered', value: colorCode.green },
    { key: 'deleted', value: colorCode.default }
];

export const studentsStatusColorOptions = [
    { key: 'graduated', value: colorCode.orange },
    { key: 'started_application', value: colorCode.green },
    { key: 'pause_application', value: colorCode.brown },
    { key: 'got_offer', value: colorCode.blue },
    { key: 'failed', value: colorCode.red },
    { key: 'deleted', value: colorCode.default }
];

export const explanationStatusOptions = [
    { key: 'to_be_explained', value: 'To be Explained' },
    { key: 'agreed_verbally', value: 'Agreed Verbally' },
    { key: 'agreed_and_got_confirmation_email', value: 'Agreed and Got Confirmation Email' },
    { key: 'one_month_normal_application', value: 'One Month Normal Application' },
    { key: 'declined_due_to_relocation', value: 'Declined Due to Relocation' },
    { key: 'declined_due_to_salary', value: 'Declined Due to Salary' },
    { key: 'declined_due_to_interested_in_datascience_only', value: 'Declined Due to Interested in Data Science Only' },
    { key: 'declined_due_to_other_reason', value: 'Declined Due to Other Reason' }
];

export const partnercompanyOptions = [
    { key: 'to_be_applied', value: 'To Be Applied' },
    { key: 'applied', value: 'Applied' },
    { key: 'ongoing', value: 'Ongoing' },
    { key: 'got_an_offer', value: 'Got an Offer' },
    { key: 'rejected', value: 'Rejected' },
    { key: 'got_paid_project', value: 'Got Paid Project' },
    { key: 'Got Paid Project', value: 'Kicked Out After Joining' }
];

export const relocationOptions = [
    { key: 'not_ready', value: 'Not Ready to Relocate' },
    { key: 'ready_near_place', value: 'Ready to relocate near place' },
    { key: 'ready', value: 'Ready to relocate any place in US' }
];

export const degreeOptions = [
    { key: 'high_school', value: 'High School Diploma' },
    { key: 'undergraduate', value: 'Undergraduate Degree Bachelors' },
    { key: 'masters', value: 'Graduate Degree Masters' },
    { key: 'phd', value: 'PHD' }
];
