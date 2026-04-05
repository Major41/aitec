"use client";

import { useState, useRef, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Undo2,
  Redo2,
} from "lucide-react";

interface RichTextEditorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({
  label,
  value,
  onChange,
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editorRef.current && !isEditing) {
      editorRef.current.innerHTML = value;
    }
  }, [value, isEditing]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleBold = () => execCommand("bold");
  const handleItalic = () => execCommand("italic");
  const handleHeading = () => execCommand("formatBlock", "<h2>");
  const handleUnorderedList = () => execCommand("insertUnorderedList");
  const handleOrderedList = () => execCommand("insertOrderedList");
  const handleUndo = () => execCommand("undo");
  const handleRedo = () => execCommand("redo");

  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="border border-border rounded-lg overflow-hidden">
        {/* Toolbar */}
        <div className="bg-muted border-b border-border p-2 flex flex-wrap gap-1">
          <Button
            size="sm"
            variant="outline"
            onClick={handleBold}
            className="h-8 w-8 p-0"
            type="button"
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={handleItalic}
            className="h-8 w-8 p-0"
            type="button"
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={handleHeading}
            className="h-8 w-8 p-0"
            type="button"
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={handleUnorderedList}
            className="h-8 w-8 p-0"
            type="button"
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={handleOrderedList}
            className="h-8 w-8 p-0"
            type="button"
            title="Numbered List"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>

          <div className="border-l border-border mx-1" />

          <Button
            size="sm"
            variant="outline"
            onClick={handleUndo}
            className="h-8 w-8 p-0"
            type="button"
            title="Undo"
          >
            <Undo2 className="h-4 w-4" />
          </Button>

          <Button
            size="sm"
            variant="outline"
            onClick={handleRedo}
            className="h-8 w-8 p-0"
            type="button"
            title="Redo"
          >
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Editor Content */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onFocus={() => setIsEditing(true)}
          onBlur={() => setIsEditing(false)}
          suppressContentEditableWarning
          className="min-h-96 px-4 py-3 text-base outline-none focus:ring-0 bg-background text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-2 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:my-2 [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:my-2 [&_li]:my-1"
          style={{ minHeight: "24rem", whiteSpace: "pre-wrap" }}
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Use the toolbar to format your text. You can bold, italicize, create
        headings and lists.
      </p>
    </div>
  );
}
