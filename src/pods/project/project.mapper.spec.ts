import { mapProjectFromApiToVm } from "./project.mapper";
import * as viewModel from './project.vm';
import Axios from 'axios'

describe('Project mapper tets', () => {
  it('should return empty when feeding undefined project', () => {
    // Arrange
    const project = undefined;
    const emptyProject = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return empty when feeding null project', () => {
    // Arrange
    const project = null;
    const emptyProject = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return project with empty employees when feeding a project with null array of employees', () => {
    // Arrange
    const apiProject = {
      id: '1',
      name: 'test empty employees',
      externalId: '1',
      comments: '',
      isActive: false,
      employees: null,
    };
    const viewProject = {
      id: '1',
      name: 'test empty employees',
      externalId: '1',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(viewProject);
  });

  it('should return project with empty employees when feeding a project with undefined array of employees', () => {
    // Arrange
    const apiProject = {
      id: '1',
      name: 'test empty employees',
      externalId: '1',
      comments: '',
      isActive: false,
      employees: undefined,
    };
    const viewProject = {
      id: '1',
      name: 'test empty employees',
      externalId: '1',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(viewProject);
  });

  it('should return project with one employee when feeding a project with an array of one employee', () => {
    // Arrange
    const apiProject = {
      id: '1',
      name: 'test 1 employee',
      externalId: '1',
      comments: '',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Daniel Perez',
        },
      ],
    };
    const viewProject = {
      id: '1',
      name: 'test 1 employee',
      externalId: '1',
      comments: '',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Daniel Perez',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(viewProject);
  });

  it('should return project with 2 employees when feeding a project with an array of 2 employees', () => {
    // Arrange
    const apiProject = {
      id: '1',
      name: 'test 1 employee',
      comments: 'Comentario',
      externalId: '1234',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Daniel Perez',
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false,
        },
      ],
    };
    const viewProject = {
      id: '1',
      name: 'test 1 employee',
      comments: 'Comentario',
      externalId: '1234',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: true,
          employeeName: 'Daniel Perez',
        },
        {
          id: '2',
          employeeName: 'Jose Sanchez',
          isAssigned: false,
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(apiProject);

    // Assert
    expect(result).toEqual(viewProject);
  });
});