/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, cloneElement, createContext, useContext, useState } from "react";
import { AnyFunction } from "../../../../shared/types/system";

type JobApplicationEditFieldContextType = {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

type JobApplicationEditFieldProviderProps = {
  children: React.ReactNode;
};

type DisplayElement = {
  children: React.ReactElement;
  className?: string;
};

type EditElement = {
  children: React.ReactElement;
  onChange: AnyFunction;
  className?: string;
};

type SaveButton = {
  children: React.ReactElement;
  onSubmit: AnyFunction;
  className?: string;
};

type EditButton = {
  children: React.ReactElement;
  className?: string;
};

const JobApplicationFieldContext = createContext<
  JobApplicationEditFieldContextType | undefined
>(undefined);

export const JobApplicationField: FC<JobApplicationEditFieldProviderProps> & {
  DisplayElement: FC<DisplayElement>;
  EditElement: FC<EditElement>;
  SaveButton: FC<SaveButton>;
  EditButton: FC<EditButton>;
} = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);

  const value = {
    isEditing,
    setIsEditing,
  };

  return (
    <JobApplicationFieldContext.Provider value={value}>
      {children}
    </JobApplicationFieldContext.Provider>
  );
};

export const DisplayElement: FC<DisplayElement> = ({ children, className }) => {
  const { isEditing, setIsEditing } = useContext(JobApplicationFieldContext)!;

  let lastTap = 0;

  function handleDescDoubleClicked() {
    setIsEditing(true);
  }

  function handleTouchEnd() {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) setIsEditing(true);
    lastTap = currentTime;
  }

  if (isEditing) return null;

  return cloneElement(children, {
    onDoubleClick: handleDescDoubleClicked,
    onTouchEnd: handleTouchEnd,
    className,
  });
};

export const EditElement: FC<EditElement> = ({
  children,
  onChange,
  className,
}) => {
  const { isEditing } = useContext(JobApplicationFieldContext)!;

  if (!isEditing) return null;

  return cloneElement(children, {
    onChange,
    className,
  });
};

export const SaveButton: FC<SaveButton> = ({
  children,
  onSubmit,
  className,
}) => {
  const { isEditing, setIsEditing } = useContext(JobApplicationFieldContext)!;

  function handleSave() {
    onSubmit();
    setIsEditing(false);
  }

  if (!isEditing) return null;

  return cloneElement(children, {
    onClick: handleSave,
    className,
  });
};

export const EditButton: FC<EditButton> = ({ children, className }) => {
  const { isEditing, setIsEditing } = useContext(JobApplicationFieldContext)!;

  function handleClick() {
    setIsEditing(true);
  }

  if (isEditing) return null;

  return cloneElement(children, {
    onClick: handleClick,
    className,
  });
};

JobApplicationField.DisplayElement = DisplayElement;
JobApplicationField.EditElement = EditElement;
JobApplicationField.SaveButton = SaveButton;
JobApplicationField.EditButton = EditButton;
