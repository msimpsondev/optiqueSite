$('#select')
  .dropdown()
;

const validationRules = {
  fields: {
      name: {
        identifier: 'fullName',
        rules: [
          {
            type: 'empty',
            prompt: 'Please enter your name',
          },
        ],
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'email',
            prompt: 'Please enter a valid email',
          },
        ],
      },
      services: {
        identifier: 'services',
        rules: [
          {
            type: 'minCount[1]',
            promot: 'Please select at least one service',
          },
        ],
      },
    },
};

$('.ui.form').form(validationRules);
