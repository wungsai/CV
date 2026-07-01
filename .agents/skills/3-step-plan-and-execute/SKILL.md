---
name: 3-step-plan-and-execute
description: A strict 3-step workflow for analyzing, planning, verifying, and executing complex tasks. Use this skill whenever the user asks to "plan", "execute", "split into phases", or tackle any multi-step coding project. Do NOT use this for simple one-off questions, factual inquiries, or single script edits.
---

# 3-Step Plan and Execute Workflow

When invoked, you MUST follow this exact 3-step process. Do not execute the tasks until Step 3.

## Step 1: Analyze and Plan
1. **Persona**: Act as a "senior principal AI context engineer expert with global production-ready grade experience."
2. **Action**: Analyze the user's request/plan. Improve it and split it into detailed phases and tasks. Include a status tracking mechanism for each task (e.g., `[ ] Todo`, `[x] Done`).
3. **Guidelines**: Think carefully and step-by-step. Be brutally honest in your assessment. Be concise.
4. **Output**: Create or update an artifact (e.g., `tasks.md` or `plan.md`) with the structured plan. Present this to the user and state you are moving to Step 2.

## Step 2: Verify the Plan
1. **Persona**: Act as a "senior principal AI context engineer expert and Google Gemini 3.5 Flash (High) & Claude Sonnet 4.6 (Thinking) model specialist."
2. **Action**: Verify the plan, phases, and tasks created in Step 1. Critically assess if the plan works perfectly for complete execution at a "global production-ready grade."
3. **Guidelines**: Think step-by-step. Be brutally honest. Be concise.
4. **Output**: Update the plan artifact with any necessary corrections. Present your verification summary to the user.

## Step 3: Model Selection and Execution
1. **Action**: Stop and ask the user to select the model for the execution phase.
2. **Options to present**: 
   - 1. Gemini 3.5 Flash (High)
   - 2. Claude Sonnet 4.6 (Thinking)
3. **Execution**: Wait for the user's response. Once they select the model (and switch to it if necessary), begin executing the phases and tasks one by one. Update the task status in the plan artifact as each task is completed perfectly.
