import userData from 'data/user.js';
import projectsData from 'data/projects.js';
import projectTypesData from 'data/projectTypes.js';

const projectsTypeAll = {
  id: -1,
  selected: true,
  name: 'All',
  icon: 'apps'
};

export default function (state, action) {

  if (!state) {
    const projectTypes = projectTypesData.map(p => p);
    projectTypes.unshift(projectsTypeAll);
    return Immutable.fromJS({
      user: userData,
      projects: projectsData,
      projectTypes
    });
  }

  switch (action.type) {

    case 'FILTER':
      const id = +action.id;
      state = state.
        updateIn(['projectTypes'], projectTypes => {
          return projectTypes.map(pt => {
            return pt.set('selected', pt.get('id') === id ? true : false);
          });
        }).
        updateIn(['projects'], projects => {
          return projects.map(project => {
            return project.set('_hide', id === -1 ? false : project.get('type') !== id);
          });
        });
      break;
  }

  return state;
}
