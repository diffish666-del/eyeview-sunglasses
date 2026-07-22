export interface DefinitionBlockProps {
  id: string
  term: string
  definition: string
}

export default function DefinitionBlock({ id, term, definition }: DefinitionBlockProps) {
  return (
    <div id={id} className="border border-gray-200 rounded-lg p-5 bg-white hover:shadow-md transition-shadow">
      <dt className="text-lg font-semibold text-primary-700 mb-2">
        <dfn>{term}</dfn>
      </dt>
      <dd className="text-gray-600 leading-relaxed">
        {definition}
      </dd>
    </div>
  )
}
