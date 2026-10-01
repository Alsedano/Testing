import { render, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import React from 'react';

describe('common/Confirmation Dialog Component', () => {
  it('should not render if isOpen is false', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: false,
      title: '',
      onAccept: vi.fn(),
      onClose: vi.fn(),
      labels: { closeButton: '', acceptButton: '' },
      children: null,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const element = screen.queryByRole('dialog');

    // Assert
    expect(element).toBeNull();
    expect(element).not.toBeInTheDocument();
  });

  it('should render as expected passing required properties', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      title: '',
      onAccept: vi.fn(),
      onClose: vi.fn(),
      labels: { closeButton: '', acceptButton: '' },
      children: null,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const element = screen.getByRole('dialog');

    // Assert
    expect(element).toBeInTheDocument();
  });

  it('should have two buttons, one primary and another one secondary', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      title: '',
      onAccept: vi.fn(),
      onClose: vi.fn(),
      labels: { closeButton: 'Cerrar', acceptButton: 'Aceptar' },
      children: null,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const element = screen.getByRole('dialog');
    const btnPrimary = screen.getByText('Aceptar');
    const btnSecondary = screen.getByText('Cerrar');

    // Assert
    expect(element).toBeInTheDocument();
    expect(btnPrimary).toBeInTheDocument();
    expect(btnSecondary).toBeInTheDocument();
  });

  it('should render as expected with a title', () => {
    // Arrange
    const props: React.ComponentProps<typeof ConfirmationDialogComponent> = {
      isOpen: true,
      title: 'Title test',
      onAccept: vi.fn(),
      onClose: vi.fn(),
      labels: { closeButton: 'Cerrar', acceptButton: 'Aceptar' },
      children: null,
    };

    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const element = screen.getByRole('dialog');
    const title = screen.getByText('Title test');

    // Assert
    expect(element).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
