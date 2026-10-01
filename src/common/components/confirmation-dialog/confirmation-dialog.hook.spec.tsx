import { act, renderHook } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { createEmptyLookup } from '#common/models';

describe('common/Confirmation Dialog Hook', () => {
  it('should return a bool: isOpen with default values and onOpenDialog function when it calls it', () => {
    // Arrange
    const defaultValue = false;

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.isOpen).toEqual(defaultValue);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should return a Lookup object with default values and onOpenDialog function when it calls it', () => {
    // Arrange
    const defaultValue = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    // Assert
    expect(result.current.itemToDelete).toEqual(defaultValue);
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update isOpen value when it send valid value using onOpenDialog', () => {
    // Arrange
    const newValue = true;
    const item = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toEqual(newValue);
  });

  it('should update itemToDelete value when it send valid value using onOpenDialog', () => {
    // Arrange
    const newItem = {
      id: '1',
      name: 'Pepe test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onOpenDialog(newItem);
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(newItem);
  });

  it('should update itemToDelete with the default value when it send valid value using onAccept', () => {
    // Arrange
    const emptyItem = createEmptyLookup();

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyItem);
  });

  it('should update isOpen value to false when it send valid value using onClose', () => {
    // Arrange
    const valueClosed = false;

    // Act
    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onClose();
    });

    // Assert
    expect(result.current.isOpen).toEqual(valueClosed);
  });
});
