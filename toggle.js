const ID = 'invert-site';
const CLASS = 'invert-site';

document.getElementById(ID) ?? document.head.append(
  Object.assign(document.createElement('style'), {
    id: ID,
    textContent: `body.${CLASS} { filter: invert(1); }`,
  })
);

document.body?.classList.toggle(CLASS);
