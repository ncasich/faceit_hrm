<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Participant;
use App\User;

class Event extends Model implements \MaddHatter\LaravelFullcalendar\Event
{
    const EVENT_CUSTOM = 1;
    const EVENT_INTERVIEW = 2;

    protected $primaryKey = 'id';
    protected $dates = ['start', 'end'];

    protected $fillable = [
        'title',
        'color',
        'manager_id',
        'description',
        'start',
        'end',
    ];

    /**
     * Get the event's id number
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the event's title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Is it an all day event?
     *
     * @return bool
     */
    public function isAllDay()
    {
        return (bool)$this->all_day;
    }

    /**
     * Get the start time
     *
     * @return DateTime
     */
    public function getStart()
    {
        return $this->start;
    }

    /**
     * Get the end time
     *
     * @return DateTime
     */
    public function getEnd()
    {
        return $this->end;
    }

    /**
     * @return array
     */
    public function getEventOptions()
    {
        return [
            'url' => route('event.show', ['id' => $this->id]),
            'color' => $this->color,
        ];
    }

    /**
     * @return array
     */
    public static function getRules($start, $end)
    {
        return [
            "start" => "required|date|after:now",
            "end" => "required|date|after:$start",
            "manager_id" => "integer|exists:users,id|freetime:$start,$end",
        ];
    }

    /**
     * @return array
     */
    public static function getTypes()
    {

        static $list;
        if (empty($list)) {
            $list = [
                self::EVENT_INTERVIEW => 'Собеседование',
                self::EVENT_CUSTOM => 'Пользовательский тип',

            ];
        }
        return $list;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function participants()
    {
        return $this->hasMany(Participant::class);
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function manager()
    {
        return $this->belongsTo(User::class);

    }

    /**
     *
     */
    public function removeParticipants()
    {
        $this->participants->each(function ($item) {
            $item->delete();
        });
    }
}
