#include <limits.h>

typedef struct cursor {
	cursor(const unsigned char* const d = NULL): bytes(0), bits(CHAR_BIT), data(d), size(0) {}
	uint64_t bytes;
	uint64_t bits;
	const unsigned char* data;
	uint64_t size;
} cursor_t;

inline void move_cursor_n_bit(uint64_t& bits, uint64_t& bytes, int n)
{
	if ((bits -= n) < 0)
	{
		bits = CHAR_BIT - ((-bits) % CHAR_BIT);
		bytes += bytes / 8;
	}
}

inline void move_cursor_1_bit(uint64_t& bits, uint64_t& bytes)
{
	if (--bits == 0)
	{
		bits = CHAR_BIT;
		bytes++;
	}
}

/*
Consume and return up to 64-bits
*/
uint64_t read_bits(cursor_t& cursor, uint8_t bits)
{
	assert(bits >= 0 && bits <= 64);

	uint64_t ret = 0;

	for (uint64_t i = 1; i <= bits; i++, move_cursor_1_bit(cursor.bits, cursor.bytes))
	{
		// ret |= ((cursor.data[cursor.bytes] & (1 << (cursor.bits - 1)) >> (cursor.bits - 1))) << (bits - i);
		// uint8_t original_bit = cursor.data[cursor.bytes] & (1 << (cursor.bits - 1));
		// uint8_t move_to_begin = original_bit >> (cursor.bits - 1);
		// uint64_t destiny_bit_position = bits - i;
		ret |= ((uint64_t)(cursor.data[cursor.bytes] & (1 << (cursor.bits - 1))) >> (cursor.bits - 1)) << (bits - i);
	}

	return ret;
}

uint8_t read_1_bit(cursor_t& cursor)
{
	uint8_t ret = (cursor.data[cursor.bytes] & (1 << (cursor.bits - 1))) >> (cursor.bits - 1);
	move_cursor_1_bit(cursor.bits, cursor.bytes);
	return ret;
}

/*
Just observe the next 64-bits
*/
uint64_t next_bits(cursor_t& cursor, uint8_t bits)
{
	assert(bits >= 0 && bits <= 64);

	uint64_t ret = 0, _bits = cursor.bits, bytes = cursor.bytes;

	for (uint64_t i = 1; i <= bits; i++, move_cursor_1_bit(_bits, bytes))
	{
		// ret |= ((cursor.data[cursor.bytes] & (1 << (cursor.bits - 1)) >> (cursor.bits - 1))) << (bits - i);
		// uint8_t original_bit = cursor.data[cursor.bytes] & (1 << (cursor.bits - 1));
		// uint8_t move_to_begin = original_bit >> (cursor.bits - 1);
		// uint64_t destiny_bit_position = bits - i;
		ret |= ((uint64_t)(cursor.data[bytes] & (1 << (_bits - 1))) >> (_bits - 1)) << (bits - i);
	}

	return ret;
}
