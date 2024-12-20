<?php

namespace App\Widgets;

use Log1x\AcfComposer\Builder;
use Log1x\AcfComposer\Widget;

class ExempleWidget extends Widget
{
    /**
     * The widget name.
     *
     * @var string
     */
    public $name = 'Exemple Widget';

    /**
     * The widget description.
     *
     * @var string
     */
    public $description = 'A beautiful Exemple Widget widget.';

    /**
     * Data to be passed to the widget before rendering.
     */
    public function with(): array
    {
        return [
            'items' => $this->items(),
        ];
    }

    /**
     * The widget title.
     */
    public function title(): string
    {
        return get_field('title', $this->widget->id);
    }

    /**
     * The widget field group.
     */
    public function fields(): array
    {
        $fields = Builder::make('exemple_widget');

        $fields
            ->addText('title');

        $fields
            ->addRepeater('items')
                ->addText('item')
            ->endRepeater();

        return $fields->build();
    }

    /**
     * Return the items field.
     *
     * @return array
     */
    public function items()
    {
        return get_field('items', $this->widget->id) ?: [];
    }
}
